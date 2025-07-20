/**
 * Describe this function...
 * @param {IClientAPI} context
 */
export default function RefreshPage(context) {
    // Get the page proxy
    const pageProxy = context.getPageProxy();
    
    // Redraw the page to reflect theme/language changes
    return pageProxy.redraw();
}