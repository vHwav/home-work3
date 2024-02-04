import {useEffect, useRef, useState} from 'react';

function TabMenu(){
    const [isShow, setIsShow] = useState(false)
    const subjectList = useRef()
    const plusButton = useRef()
    useEffect(()=>{
        const handleToggle = (e) =>{
            if(!isShow){
                subjectList.current.classList.remove('hidden')
                setIsShow(true)
            }else{
                subjectList.current.classList.add('hidden')
                setIsShow(false)
            }
        }
        plusButton.current.addEventListener('click',handleToggle)
    },[isShow])
    const subjects =[
        {
            label: "헤드셋 품목만 정렬",
            name: '🎧헤드셋'
        },
        {
            label: "키보드 품목만 정렬",
            name: '⌨키보드'
        },
        {
            label: "마우스 품목만 정렬",
            name: '🖱️마우스'
        },
        {
            label: "컴퓨터 품목만 정렬",
            name: '💻컴퓨터'
        },
        {
            label: "기타 품목만 정렬",
            name: '🎈기타 등등'
        },
        {
            label: "글쓰기",
            name: '📃작성하기'
        },
    ]
    


    return (
        <>
            <button ref={plusButton} type="button"  className="exchange-button exchange-button-no z-10">
            <img src="/images/plusTap.svg" className="exchange-button-img" alt />
            </button>
            <div ref={subjectList} className="exchange-button-ul hidden fixed bottom-44 right-5 z-10">
                <ul>
                    {subjects.map((item)=>{
                        return(
                            <li className="exchange-headset exchange-li-button">
                            <button type="button" aria-label={item.label}>
                                {item.name}
                            </button>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
                    
        </>

    )
}



export default TabMenu