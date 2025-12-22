// services/SummaryCalculator.js
class SummaryCalculator 
{
    calculate(orders) 
    {
        const groups = new Map();
        let totalCount = 0;
        let totalAmount = 0;
        
        orders.forEach(order => 
        {
            const key = `${order.workshop}|${order.product}`;
        
            if (!groups.has(key)) 
            {
                groups.set(key, {
                    workshop: order.workshop,
                    product: order.product,
                    count: 0,
                    amount: 0
                });
            }
            
            const group = groups.get(key);
            group.count++;
            group.amount += order.amount;
            
            totalCount++;
            totalAmount += order.amount;
        });
        
        // Преобразуем Map в массив и сортируем
        const summary = Array.from(groups.values()).sort((a, b) => {
            return a.workshop.localeCompare(b.workshop) || 
                    a.product.localeCompare(b.product);
        });
        
        // Добавляем итоговую строку
        summary.push({
            workshop: 'ИТОГО:',
            product: '',
            count: totalCount,
            amount: totalAmount
        });
        
        return summary;
    }
}