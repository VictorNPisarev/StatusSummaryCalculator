class Constants 
{
  static get SHEET_NAMES() 
  {
    return {
      DATE_FILTER: 'GS_DateFilter',
      ORDERS_BUFFER: 'GS_OrdersToDo',
      SUMMARY: 'GS_ProductionStatusSummary'
    };
  }

  static get FIELD_MAPPINGS() 
  {
    /*return {
      // Поля в AppSheet
      ORDER_NUMBER: 'Номер заказа',
      READY_DATE: 'Дата готовности',
      PRODUCT_TYPE: 'Тип изделия',
      WORKSHOP: 'Участок',
      AMOUNT: 'Сумма'
    };*/

    //OrdersToDo
    return {
      // Поля в AppSheet
      RowID: 'Row ID',
      OrderNumber: '№ Заказа',
      ReadyDate: 'Готовность',
      WinAmount: 'Окна, шт',
      WinSqrt: 'Окна, м2',
      PlateAmount: 'Щитовые, шт',
      PlateSqrt: 'Щитовые, м2'
    };

  }

  static get SCRIPT_PROPERTIES() 
  {
    const props = PropertiesService.getScriptProperties();
    return {
      APPSHEET_APP_ID: props.getProperty('APPSHEET_APP_ID'),
      APPSHEET_API_KEY: props.getProperty('APPSHEET_API_KEY'),
      APPSHEET_TABLE_NAME: props.getProperty('APPSHEET_TABLE_NAME')
    };
  }
}