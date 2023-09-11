import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column({name: 'login', type: 'varchar'})
  login: string

  @Column({name: 'password', type: 'varchar'})
  password: string

}
