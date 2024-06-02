import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { solveEquation } from '../../store/QuarticEquation';

const QuarticEquations = () => {
    const dispatch = useDispatch();
    const solution = useSelector((state) => state.equation.solution);

    const [coefficients, setCoefficients] = useState({
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCoefficients({
            ...coefficients,
            [name]: parseFloat(value),
        });
    };

    const handleSolve = () => {
        const { a, b, c, d, e } = coefficients;
        dispatch(solveEquation({ a, b, c, d, e }));
    };

    return (
        <div>
            <h1>Giải Phương Trình Bậc Tư</h1>
            <div>
                <input type="number" name="a" value={coefficients.a} onChange={handleChange} /> x^4 +
                <input type="number" name="b" value={coefficients.b} onChange={handleChange} /> x^3 +
                <input type="number" name="c" value={coefficients.c} onChange={handleChange} /> x^2 +
                <input type="number" name="d" value={coefficients.d} onChange={handleChange} /> x +
                <input type="number" name="e" value={coefficients.e} onChange={handleChange} /> = 0
            </div>
            <button onClick={handleSolve}>Giải Phương Trình</button>
            {solution && (
                <div>
                    <p>Nghiệm:</p>
                    {solution.map((sol, index) => (
                        <p key={index}>{sol.toString()}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default QuarticEquations