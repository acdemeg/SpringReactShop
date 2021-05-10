const compose = (...func) => comp => func.reduceRight((wrapped, f) => f(wrapped), comp);

export default compose;
