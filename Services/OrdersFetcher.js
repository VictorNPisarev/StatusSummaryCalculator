// services/OrdersFetcher.js
class OrdersFetcher
{
    constructor(appSheetService, tableName, fieldMappings) 
    {
        this.appSheetService = appSheetService;
        this.tableName = tableName;
        this.fieldMappings = fieldMappings;
    }
    
    async fetchByDateRange(period) 
    {
        const orders = await this.appSheetService.findOrdersByDateRange
        (
            this.tableName,
            this.fieldMappings.READY_DATE,
            period.from,
            period.to
        );
        
        return orders.map(
            order => ({
                id: order[this.fieldMappings.ORDER_NUMBER],
                date: order[this.fieldMappings.READY_DATE],
                product: order[this.fieldMappings.PRODUCT_TYPE],
                workshop: order[this.fieldMappings.WORKSHOP],
                amount: Number(order[this.fieldMappings.AMOUNT]) || 0
            }));
    }
}