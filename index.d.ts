import axios from 'axios';

export type DBConnectionValue = ({ data: Object | Array | undefined } & Object) | undefined;

export function connectToDB(dbName: string, dbOwner?: string | undefined, options?: string | undefined): DBConnectionValue
