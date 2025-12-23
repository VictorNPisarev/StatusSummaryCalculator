// services/SummaryCalculator.js
class SummaryCalculator 
{
    calculate(orders) 
    {
        const groups = new Map();
        let totalWinAmount = 0;
        let totalWinSqrt = 0;
        let totalPlateAmount = 0;
        let totalPlateSqrt = 0;
        
        orders.forEach(order => 
        {
            const key = `${order.productionStatusId}`;
        
            if (!groups.has(key)) 
            {
                groups.set(key, {
                    productionStatusId: productionStatusId,
                    winAmount: 0,
                    winSqrt: 0,
                    plateAmount: 0,
                    plateSqrt: 0
                });
            }
            
            const group = groups.get(key);
            group.winAmount += order.winAmount;
            group.winSqrt += order.winSqrt;
            group.plateAmount += order.plateAmount;
            group.plateSqrt += order.plateSqrt;
            
            totalWinAmount += order.amount;
            totalWinSqrt += order.winSqrt;
            totalPlateAmount += order.plateAmount;
            totalPlateSqrt += order.plateSqrt;
        });
        
        // Преобразуем Map в массив и сортируем
        const summary = Array.from(groups.values()).sort((a, b) => {
            return a.productionStatusId.localeCompare(b.productionStatusId);
        });
        
        // Добавляем итоговую строку
        summary.push({
            productionStatusId: 'ИТОГО:',
            winAmount: totalWinAmount,
            winSqrt: totalWinSqrt,
            plateAmount: totalPlateAmount,
            plateSqrt: totalPlateSqrt
        });
        
        return summary;
    }
}