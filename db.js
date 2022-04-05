
const { Sequelize, DataTypes, Model } = require('sequelize')

const database = new Sequelize({
  dialect: 'sqlite',
  storage: 'icecream.sqlite'
})

class Flavour extends Model{}
Flavour.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    flavour: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: 'flavour',
    sequelize: database,
    timestamps: false
  }
)


class User extends Model{
  toJSON() {
    return {...this.get(), id: undefined}
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.INTEGER,
      unique: true,
      //allowNull: false
    },
  },
  {
    modelName: 'user',
    sequelize: database,
    timestamps: false
  }
)

class Vote extends Model{
  
}
Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    vote: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
  },
  {
    modelName: 'vote',
    sequelize: database,
    timestamps: false
  }
)

User.hasOne( Vote )
Vote.belongsTo( User)


Flavour.hasMany( Vote )
Vote.belongsTo( Flavour )


async function setup(){
 // await database.sync({force: false, alter: true})
 await database.sync({force: true})
}




async function seed(){
  const flavour = await Flavour.bulkCreate([
    {flavour: 'Vanilla', vote:'1'},
    {flavour: 'Strawberry', vote:'1'},
    {flavour: 'Chocholoco', vote:'1'},
    {flavour: 'Coockie', vote:'1'},
    {flavour: 'Mint', vote:'1'},
    {flavour: 'Fudge Brownie', vote:'1'},
    {flavour: 'Christmassy', vote:'1'},
    {flavour: 'Cold Turkey', vote:'1'},
    {flavour: 'White Chocolate', vote:'1'},
    {flavour: 'Chocolate', vote:'1'},
    {flavour: 'Mango', vote:'1'},
    {flavour: 'Banana', vote:'1'},
    {flavour: 'Oreo', vote:'1'},
    {flavour: 'Salted Caramel', vote:'1'},
    {flavour: 'Peanut Butter', vote:'1'},
    {flavour: 'Blueberry', vote:'1'}, 
  ]) 
}



async function start(){
  await setup()
  await seed()
  
}
start()

module.exports = { 
  Flavour,
  User,
  Vote
}