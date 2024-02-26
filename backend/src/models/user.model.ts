import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
export type userGender = "male" | "female";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
  })
  fullname!: string;

  @Column({
    type: "varchar",
    unique: true,
  })
  username!: string;

  @Column({
    type: "varchar",
    length: 6,
  })
  password!: string;

  @Column({
    type: "enum",
    enum: ["male", "female"],
    default: "male",
  })
  gender!: userGender;

  @Column({
    type: "varchar",
    default: "",
  })
  profilePic!: string;

  @Column("timestamp", { nullable: true })
  last_login!: Date;
}
