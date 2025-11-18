import React, {useState, useEffect, useCallback, useRef} from "react";
import './carousel.css'
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons";

interface Card{
    id: number;
    title:string;
    description : string;
}

const CardCarousel: React.FC = () =>{
    const cards: Card[] = [
        {
            id: 1,
            title: '우산',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            id: 2,
            title: '보조배터리',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            id: 3,
            title: '충전기 선',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            id: 4,
            title: '노트북 거치대',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            id: 5,
            title: '스테이플러',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(cards.length);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [cardsPerView, setCardsPerView] = useState(3);
    const trackRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const extendedCards = [...cards, ...cards, ...cards];

    // 화면 크기에 따라 보이는 카드 개수 조정
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth <= 992) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    //다음 슬라이드로 이동하기
    const nextSlide = useCallback(() => {
        if(isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex+1);
    }, [isTransitioning]);

    //이전 슬라이드로 이동하기
    const prevSlide = useCallback(() => {
        if(isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex-1);
    }, [isTransitioning]);

    useEffect(() => {
        if(!isTransitioning) return;
        const timeout = setTimeout(() => {
            setIsTransitioning(false);
            //끝에 도달하면 transition 없이 처음으로
            if(currentIndex >= cards.length*2){
                setCurrentIndex(cards.length);
            }
            // 처음에 도달하면 transition 없이 끝으로
            else if (currentIndex <= 0){
                setCurrentIndex(cards.length);
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [currentIndex,isTransitioning,cards.length]);

    //자동 재생 효과
    useEffect(() => {
        if(!isAutoPlay) return;
        const interval = setInterval(() => {
            nextSlide();
        },3000);
        return () => clearInterval(interval);
    }, [isAutoPlay, nextSlide]);

    const handlePrevClick = () => {
        setIsAutoPlay(false);
        prevSlide();
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsAutoPlay(true);
        }, 5000);
    };

    const handleNextClick = () => {
        setIsAutoPlay(false);
        nextSlide();
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsAutoPlay(true);
        }, 5000);
    };

    // 슬라이드 이동 거리 계산 (픽셀 단위)
    const getTranslateValue = () => {
        if (!trackRef.current) return 0;

        const firstCard = trackRef.current.querySelector('.card') as HTMLElement;
        if (!firstCard) return 0;

        // 카드 너비 + gap
        const cardWidth = firstCard.offsetWidth;
        const gap = cardsPerView === 3 ? 1.5 : cardsPerView === 2 ?
            (window.innerWidth <= 768 ? (window.innerWidth <= 576 ? 0.75 : 1) : 1.5) : 1.5;
        const gapPx = gap * 16; // rem to px (assuming 1rem = 16px)

        return currentIndex * (cardWidth + gapPx);
    };

    return(
        <div className="carousel-container">
            <div className="carousel-header">
                <div className="carousel-controls" >
                    <button className="btn btn-outline-dark me-2"
                            onClick={handlePrevClick}
                            aria-label="이전"
                    >
                        <ChevronLeft size={20} />
                        <span className="d-none d-sm-inline ms-1">이전</span>
                    </button>
                    <button className="btn btn-outline-dark"
                            onClick={handleNextClick}
                            aria-label="다음">
                        <span className="d-none d-sm-inline me-1">다음</span>
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
            <div className="carousel-viewport">
                <div className="carousel-track"
                     ref={trackRef}
                     style={{
                         transform:`translateX(-${getTranslateValue()}px)`,
                         transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                     }}
                >
                    {extendedCards.map((card, index) => (
                        <div key={`${card.id}-${index}`} className="card">
                            <div className="card-image"></div>
                            <div className="card-content">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
