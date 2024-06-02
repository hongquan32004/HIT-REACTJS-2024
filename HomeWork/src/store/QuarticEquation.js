
import { createSlice } from '@reduxjs/toolkit';

function solveQuartic(a, b, c, d, e) {
    const solutions = [];

    // Tính các hệ số chuẩn
    const alpha = (8 * b - 3 * Math.pow(a, 2)) / (8 * a);
    const beta = (Math.pow(a, 3) * e - 4 * a * b * d + 8 * c * Math.pow(a, 2) - 3 * Math.pow(b, 2)) / (8 * Math.pow(a, 2));
    const gamma = (16 * a * b * b * c - 64 * Math.pow(a, 2) * b * e - 16 * Math.pow(b, 3) * d + 16 * Math.pow(a, 3) * c * c + 256 * Math.pow(a, 4) * e - 3 * Math.pow(a, 2) * Math.pow(b, 2) * d) / (256 * Math.pow(a, 3));

    // Tính delta
    const delta = Math.pow(beta, 2) - 4 * alpha * gamma;

    if (delta > 0) {
        // Nếu delta > 0, có 4 nghiệm phân biệt
        const sqrtDelta = Math.sqrt(delta);
        const sqrtAlpha = Math.sqrt(alpha);
        const p = (-2 * Math.pow(beta, 2) + 3 * alpha * gamma) / (2 * Math.pow(sqrtAlpha, 3));
        const q = (Math.pow(beta, 3) - 4 * alpha * beta * gamma + 8 * Math.pow(alpha, 2) * delta) / (8 * Math.pow(alpha, 3));

        const acosPDividedBy2 = Math.acos(p / 2);
        const sqrtNeg2POver3 = Math.sqrt(-2 * p / 3);
        const oneThirdSqrtAlpha = sqrtAlpha / 3;

        // Nghiệm thứ nhất
        solutions.push(
            -b / (4 * a) - oneThirdSqrtAlpha * Math.cos(acosPDividedBy2 / 3 + 2 * Math.PI * 0 / 3) - sqrtNeg2POver3 * Math.cos(acosPDividedBy2 / 3)
        );

        // Nghiệm thứ hai
        solutions.push(
            -b / (4 * a) - oneThirdSqrtAlpha * Math.cos(acosPDividedBy2 / 3 + 2 * Math.PI * 1 / 3) - sqrtNeg2POver3 * Math.cos(acosPDividedBy2 / 3)
        );

        // Nghiệm thứ ba
        solutions.push(
            -b / (4 * a) - oneThirdSqrtAlpha * Math.cos(acosPDividedBy2 / 3 + 2 * Math.PI * 2 / 3) - sqrtNeg2POver3 * Math.cos(acosPDividedBy2 / 3)
        );

        // Nghiệm thứ tư
        solutions.push(
            -b / (4 * a) - oneThirdSqrtAlpha * Math.cos(acosPDividedBy2 / 3 + 2 * Math.PI * 3 / 3) - sqrtNeg2POver3 * Math.cos(acosPDividedBy2 / 3)
        );
    } else if (delta < 0) {
        // Nếu delta < 0, có 2 nghiệm thực và 2 nghiệm phức
        const sqrtAlpha = Math.sqrt(-alpha);
        const acosQDividedBy2 = Math.acos(q / 2);

        // Nghiệm thứ nhất
        solutions.push(
            -b / (4 * a) - 2 * sqrtAlpha * Math.cos(acosQDividedBy2 / 3 + 2 * Math.PI * 0 / 3)
        );

        // Nghiệm thứ hai
        solutions.push(
            -b / (4 * a) - 2 * sqrtAlpha * Math.cos(acosQDividedBy)
        )
        // Nghiệm thứ ba
        solutions.push(
            -b / (4 * a) - 2 * sqrtAlpha * Math.cos(acosQDividedBy2 / 3 + 2 * Math.PI * 2 / 3)
        );

        // Nghiệm thứ tư
        solutions.push(
            -b / (4 * a) - 2 * sqrtAlpha * Math.cos(acosQDividedBy2 / 3 + 2 * Math.PI * 3 / 3)
        );
    } else {
        // Nếu delta = 0, có 4 nghiệm đều bằng nhau
        const cbrtBetaOver2Alpha = Math.cbrt(beta / (2 * alpha));

        // Nghiệm thứ nhất
        solutions.push(
            -b / (4 * a) - 2 * cbrtBetaOver2Alpha
        );

        // Nghiệm thứ hai
        solutions.push(
            -b / (4 * a) + cbrtBetaOver2Alpha
        );

        // Nghiệm thứ ba
        solutions.push(
            -b / (4 * a) - 2 * cbrtBetaOver2Alpha
        );

        // Nghiệm thứ tư
        solutions.push(
            -b / (4 * a) + cbrtBetaOver2Alpha
        );
    }

    return solutions;
}

const initialState = {
    solution: null,
};

const quarticequation = createSlice({
    name: 'equation',
    initialState,
    reducers: {
        solveEquation: (state, action) => {
            const { a, b, c, d, e } = action.payload;

            // Chuyển đổi các hệ số sang số
            const numericA = parseFloat(a);
            const numericB = parseFloat(b);
            const numericC = parseFloat(c);
            const numericD = parseFloat(d);
            const numericE = parseFloat(e);

            // Phương trình dạng ax^4 + bx^3 + cx^2 + dx + e = 0
            state.solution = solveQuartic(numericA, numericB, numericC, numericD, numericE);
        },
    },
});



export const { solveEquation } = quarticequation.actions;
export default quarticequation.reducer;