import {useRef} from "react";

function Form(){
    const formRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formRef.current);
        const formData = new FormData(formRef.current);
        console.log(formData);
    }
    return(
        <form onSubmit={handleSubmit} ref={formRef}>
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <button>Submit</button>

        </form>
    )
}
export default Form;