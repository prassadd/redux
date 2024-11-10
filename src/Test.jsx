import { useSelector, useDispatch } from 'react-redux';
const Test = () => {
    const count = useSelector((state)=>state);
    console.log(count)
    return (
        <h1>Test</h1>
    )
}

export default Test;