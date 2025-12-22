// services/SummaryWriter.js
class SummaryWriter 
{
    constructor(sheetsService, bufferSheetName, summarySheetName) 
    {
        this.sheetsService = sheetsService;
        this.bufferSheetName = bufferSheetName;
        this.summarySheetName = summarySheetName;
    }
    
    clearBuffer() 
    {
        this.sheetsService.clearSheet(this.bufferSheetName);
    }
    
    writeToBuffer(orders) 
    {
        if (orders.length === 0) 
        {
            return;
        }
        
        const headers = [['ID', 'Дата', 'Тип изделия', 'Участок', 'Сумма']];
        const data = orders.map(order => [
            order.id,
            order.date,
            order.product,
            order.workshop,
            order.amount
        ]);
        
        this.sheetsService.writeData(this.bufferSheetName, headers.concat(data));
    }
    
    writeSummary(summary) 
    {
        const headers = [['Участок', 'Тип изделия', 'Кол-во', 'Сумма']];
        const data = summary.map(row => [
            row.workshop,
            row.product,
            row.count,
            row.amount
        ]);
        
        this.sheetsService.writeData(this.summarySheetName, headers.concat(data));
        
        // Форматируем итоговую строку
        const sheet = this.sheetsService.getSheet(this.summarySheetName);
        const lastRow = sheet.getLastRow();
        const range = sheet.getRange(lastRow, 1, 1, 4);
        range.setFontWeight('bold');
        range.setBackground('#f0f0f0');
    }
}