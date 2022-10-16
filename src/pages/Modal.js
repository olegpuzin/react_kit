import React, { useRef } from 'react'

function Modal() {

    const [open, setOpen] = React.useState(false);

    const modalRef = useRef(null);

    const onCloseModal = () => {
        setOpen(false);
    }

        // if (!open) return;

        // const handleClick = e => {
        //     if (!modalRef.current) return;
        //     if (!modalRef.current.contains(e.target)) {
        //         onCloseModal();
        //     }
        // }

        // document.addEventListener('click', handleClick);

        // return () => {
        //     document.removeEventListener('click', handleClick)
        // }
    


    return (
        <div className='modal_block'>
            <button onClick={() => setOpen((v)=>!v)} className="open-modal-btn">✨ Открыть окно</button>
            <div className={`overlay animated${open ? 'show' : ''}`}>
                <div ref={modalRef} className="modal">
                    <svg onClick={onCloseModal} height="200" viewBox="0 0 200 200" width="200">
                        <title />
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                    <img src="https://i.gifer.com/FH7W.gif" alt='Show' />
                </div>
            </div>
        </div>
    );
}

export default Modal;