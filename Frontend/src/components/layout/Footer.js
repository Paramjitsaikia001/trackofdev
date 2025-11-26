import { textStyles } from '../../utils/styles';

export default function Footer() {
    return (

        <footer className='border-t-2 border-gray-500 flex items-center justify-between  m-2 text-white min-w-[90%]'>
            <div>
                <p className={textStyles.body}>copyright 2024</p>
            </div>
            <div>
                <p className={textStyles.body}>contact me: </p>
            </div>
        </footer>
    )
}