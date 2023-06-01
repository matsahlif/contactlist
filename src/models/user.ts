import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
 @Entity()
 export  class user {
    name!: String;        //in ! nemizashtam erroresho nemifahmam
 number!: Number;
    company!:String;
    id! : Number
}