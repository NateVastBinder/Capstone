import '../../css/Header.css'
import { useNavigate } from 'react-router'



const Header = (props) => {

    const navigator = useNavigate()

    const clickHandler = () => {
        props.setUser({})
        localStorage.removeItem('email')
        navigator('/')
    }

    const renderButtons = () => {
        console.log(props.user)
        if (props.user.id === undefined) {
            return (
                <div className='flex-row header-dimensions full-width header'>
                    <div class='third-width center text'>
                        <a href="/" className='text-color'>{props.headerText}</a>
                    </div>
                    <div className='third-width center'>
                        <div class="wrap button-left ">
                        </div>
                        <div class="wrap button-left ">
                        </div>
                    </div>
                    <div className='third-width center '>
                        <div class="wrap button-left ">
                            <a href="/SignUp" class="button">Sign up</a>
                        </div>
                        <div class="wrap button-left ">
                            <a href="/Login" class="button">Log in</a>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='header'>
                    <div className='third-width center '>
                        <div class="wrap button-left ">
                        </div>
                        <div class="wrap button-left ">
                        </div>
                    </div>
                    <div class='third-width center text'>
                        <a href="/" className='text'>{props.headerText}</a>
                    </div>
                    <div className='third-width center'>
                        <div class="wrap button-left ">
                            <button class="button" onClick={clickHandler}>Logout </button>
                        </div>


                    </div>
                </div>
            )
        }

    }


    return (
        renderButtons()
    )

}

export default Header