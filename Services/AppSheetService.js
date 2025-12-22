class AppSheetService 
{
  constructor({ appId, apiKey }) 
  {
    this.baseUrl = `https://api.appsheet.com/api/v2/apps/${appId}`;
    this.headers = 
    {
      'Content-Type': 'application/json',
      'ApplicationAccessKey': apiKey
    };
  }

  /**
   * Только метод Find - остальное не нужно
   */
  async findOrdersByDateRange(tableName, dateField, startDate, endDate) 
  {
    const payload = 
    {
      "Action": "Find",
      "Properties": { "Locale": "ru-RU" },
      "Rows": 
      [{
        [dateField]: 
        {
          "$gte": this.formatDate(startDate),
          "$lte": this.formatDate(endDate)
        }
      }]
    };

    const url = `${this.baseUrl}/tables/${tableName}/Action`;
    const options = 
    {
      method: 'POST',
      headers: this.headers,
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const response = await UrlFetchApp.fetch(url, options);
    
    if (response.getResponseCode() !== 200) 
    {
      throw new Error(`AppSheet API error: ${response.getContentText()}`);
    }
    
    return JSON.parse(response.getContentText());
  }

  formatDate(date) 
  {
    return Utilities.formatDate(date, "GMT+3", "yyyy-MM-dd");
  }
}