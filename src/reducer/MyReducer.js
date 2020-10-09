export default (state, payload) => {
    switch (payload.type) {
        case 'malumot':
            return {
                ...state,
                productList:payload.malumot
            };
        case 'currentDatum':
            return {
                ...state,
                currentProductsImg:payload.datum
            };
         case 'customers':
            return {
                ...state,
                customerList:payload.datum
            };
         case 'modalClose':
            return {
                ...state,
                isMOpen: payload.status,
            };
        case 'modalOpen':
            return {
                ...state,
                isMOpen: payload.status
            };
        case 'slug':
            return {
                ...state,
                currentSlug:payload.slug
            };
        default:
            return {
                ...state
            }
    }
}