- [x]  바닐라 프로젝트의 데이터베이스 연동 부분을 리액트로 구현합니다.
- [x]  리액트 방식으로 앱의 상태 및 사이드 이펙트를 관리해봅니다.
- [ ]  커스텀 훅 함수를 1개 이상 작성해 여러 곳에서 재사용 해봅니다.
- [x]  가능한 경우, DOM 객체에 접근/조작하는 부분도 구현합니다. (옵션)
- [ ]  가능한 경우, Storybook을 활용해보세요. (옵션)

#### 구현한 것
![Animation](https://github.com/vHwav/home-work/assets/148796897/246835ac-e875-40f0-a62a-b6f8fbec15af)

useEffect를 이용해 fetch 함수로 pocketbase의 product리스트를 불러온 후,
button 태그에 useRef를 적용해서 이벤트를 이용해 토글 기능을 구현했다.

```jsx
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
```
```jsx
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
```

#### 이상한 점
abortcontroller를 이용해서 네트워크 통신을 제한 했는데, vscode에서 저장했을 때는 렌더링이 잘 되는데 새로고침하면 한번 불러온 데이터에 변경이 없어서인지 두번 렌더링이 안된다.
원래라면 새로고침 때도 렌더링이 돼야 하는 것 같은데...

#### 궁금한 점
ref를 props로 전달해줄 수는 없는걸까..?
