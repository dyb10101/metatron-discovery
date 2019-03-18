/**
 * Objects to be shared by the datasource and metadata
 */
export namespace Type {
  export enum Role {
    MEASURE = 'MEASURE',
    DIMENSION = 'DIMENSION'
  }

  export enum WKT {
    POINT = 'POINT',
    LINESTRING = 'LINESTRING',
    POLYGON = 'POLYGON'
  }

  export enum Logical {
    STRING = 'STRING',
    BOOLEAN = 'BOOLEAN',
    NUMBER = 'NUMBER',       // Integer or Double
    INTEGER = 'INTEGER',
    DOUBLE = 'DOUBLE',
    TIMESTAMP = 'TIMESTAMP',
    LNG = 'LNG',
    LNT = 'LNT',
    GEO_POINT = 'GEO_POINT',          // [lat(latitude),lon(longitude)] structure for GEO
    GEO_LINE = 'GEO_LINE',
    GEO_POLYGON = 'GEO_POLYGON',
    ARRAY = 'ARRAY',
    STRUCT = 'STRUCT',
    MAP_KEY = 'MAP_KEY',
    MAP_VALUE = 'MAP_VALUE',
    IP_V4 = 'IP_V4',         // IPv4 Address
    DISTRICT = 'DISTRICT',      // District
    EMAIL = 'EMAIL',
    SEX = 'SEX',
    CREDIT_CARD = 'CREDIT_CARD',   // Credit card
    NIN = 'NIN',           // National Indentification Number (eq. SSN)
    POSTAL_CODE = 'POSTAL_CODE',
    PHONE_NUMBER = 'PHONE_NUMBER',  // Phone Number
    URL = 'URL',
    HTTP_CODE = 'HTTP_CODE'
  }
}
