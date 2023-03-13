import { DataSource } from 'typeorm';
import { CoffeeRefactor1678490636909 as CoffeeRefactor } from 'src/migrations/1678490636909-CoffeeRefactor';
import {Coffee} from './src/coffees/entities/coffee.entity';
import {Flavor} from './src/coffees/entities/flavor.entity';


export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor],
  });