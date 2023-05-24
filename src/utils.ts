const min = Math.min
const max = Math.max
const abs = Math.abs
const clamp = (a: number, b: number, c: number) => min(c, max(a, b))


const calculateTopForElementPassingVertically = (
    heightOfElementsBefore: number,
    elementHeight: number,
    nHorizontalScrolls: number,
    scroll: number,
    viewHeight: number,
    viewWidth: number,
) => {
    return clamp(-elementHeight, heightOfElementsBefore + viewWidth * nHorizontalScrolls - scroll, viewHeight)
    // return viewHeight, heightOfElementsBefore + viewWidth * nHorizontalScrolls - scroll, 

}
const calculateTopForElementPassingHorizontally1 = (
    heightOfElementsBefore: number,
    elementHeight: number,
    nHorizontalScrolls: number,
    scroll: number,
    viewHeight: number,
    viewWidth: number,
): number => {
    return Math.max(viewHeight - elementHeight, calculateTopForElementPassingVertically(heightOfElementsBefore, elementHeight, nHorizontalScrolls, scroll, viewHeight, viewWidth))
}
const calculateTopForElementPassingHorizontally2 = (
    heightOfElementsBefore: number,
    elementHeight: number,
    nHorizontalScrolls: number,
    scroll: number,
    viewHeight: number,
    viewWidth: number,
): number => {

    if (scroll + nHorizontalScrolls * viewWidth >= heightOfElementsBefore)
        return calculateTopForElementPassingVertically(heightOfElementsBefore, elementHeight, nHorizontalScrolls, scroll, viewHeight, viewWidth);
    else return 0;



}













const calculateCommonHeight = (height1: number, height2: number, viewHeight: number) => height1 + height2 - viewHeight



const calculateLeftForElementPassingHorizontally1 = (
    heightOfElementsBefore: number,
    elementHeight: number,
    nHorizontalScrolls: number,
    scroll: number,
    viewHeight: number,
    viewWidth: number,
): number => {
    // if (scroll + viewHeight > heightOfElementsBefore + elementHeight)
    //     return heightOfElementsBefore + elementHeight - viewHeight - scroll
    // else
    //     return 0

    return clamp(-viewWidth, heightOfElementsBefore + elementHeight - viewHeight - scroll, 0)

}
const calculateLeftForElementPassingHorizontally2 = (
    heightOfElementsBefore: number,
    elementHeight: number,
    nHorizontalScrolls: number,
    scroll: number,
    viewHeight: number,
    viewWidth: number,
): number => {
    // if (heightOfElementsBefore < scroll + viewHeight)
    //     return max(0, viewWidth + (heightOfElementsBefore - viewHeight - scroll))
    // else
    //     return viewWidth
    return clamp(0, viewWidth + (heightOfElementsBefore - viewHeight - scroll), viewWidth)
}

export { calculateCommonHeight, calculateTopForElementPassingHorizontally1, calculateTopForElementPassingHorizontally2, calculateTopForElementPassingVertically, calculateLeftForElementPassingHorizontally1, calculateLeftForElementPassingHorizontally2 }