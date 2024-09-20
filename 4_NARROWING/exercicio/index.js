function reviews(review) {
    if (typeof review === "boolean") {
        if (!review) {
            return "Nenhum review.";
        }
        return "Voce avaliou sem nenhuma nota.";
    }
    if (typeof review === "number") {
        if (review > 5) {
            return "Avaliacao invalida!";
        }
        return "Voce avaliou com a nota ".concat(review);
    }
}
console.log(reviews(false));
console.log(reviews(true));
console.log(reviews(1));
console.log(reviews(2));
console.log(reviews(3));
console.log(reviews(4));
console.log(reviews(5));
console.log(reviews(6));
