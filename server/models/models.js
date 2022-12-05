import { sequelize } from '../utils/db.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	login: {
		type: DataTypes.STRING, unique: true,
	},
	password: {
		type: DataTypes.STRING
	},
	role: {
		type: DataTypes.STRING, defaultValue: "USER"
	},
	activationLink: {
		type: DataTypes.STRING
	},
	isActivation: {
		type: DataTypes.BOOLEAN, defaultValue: false
	}
})
const Product = sequelize.define('product', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	price: {
		type: DataTypes.FLOAT(10, 2), allowNull: false
	},
	name: {
		type: DataTypes.STRING, allowNull: false
	},
	description: {
		type: DataTypes.STRING, allowNull: false
	},
	discountPercentage: {
		type: DataTypes.INTEGER, allowNull: false
	},
	count: {
		type: DataTypes.INTEGER, allowNull: false
	},
	rating: {
		type: DataTypes.INTEGER, defaultValue: 0
	},
	inStock: {
		type: DataTypes.BOOLEAN, allowNull: false
	},
	img: {
		type: DataTypes.JSON                //allowNull - запрещает 0(пустым)
	},
	imgMini: {
		type: DataTypes.JSON
	},
	color: {
		type: DataTypes.STRING, allowNull: false
	},
	size: {
		type: DataTypes.JSON
	},
})
const Category = sequelize.define('category', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	title: {
		type: DataTypes.STRING
	},
})
const Brand = sequelize.define('brand', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	title: {
		type: DataTypes.STRING
	},
})
const Rating = sequelize.define('rating', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	rate: {
		type: DataTypes.STRING
	},
})
const Color = sequelize.define('color', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	name: {
		type: DataTypes.STRING
	},
	color: {
		type: DataTypes.STRING
	},
})
const Size = sequelize.define('size', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	size: {
		type: DataTypes.STRING
	},
})
const Type = sequelize.define('type', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	type: {
		type: DataTypes.STRING
	},
})
const Naznachenie = sequelize.define('naznachenie', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	title: {
		type: DataTypes.STRING
	},
})
const Opisanie = sequelize.define('opisanie', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	title: {
		type: DataTypes.STRING, allowNull: false
	},
	content: {
		type: DataTypes.JSON
	},
})
const ProductInfo = sequelize.define('productinfo', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	title: {
		type: DataTypes.STRING, allowNull: false
	},
	description: {
		type: DataTypes.STRING, allowNull: false
	},
})
const Info = sequelize.define('info', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	title: {
		type: DataTypes.STRING, allowNull: false
	},
	content: {
		type: DataTypes.STRING(1234), allowNull: false
	},
})
const TypeBrand = sequelize.define('type_brand', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
})
const CategoryBrand = sequelize.define('category_brand', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
})
const CategoryType = sequelize.define('category_type', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
})


const Feedback = sequelize.define('feedback', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	name: {
		type: DataTypes.STRING, allowNull: false
	},
	contact: {
		type: DataTypes.STRING, allowNull: false
	},
	description: {
		type: DataTypes.STRING, allowNull: false
	},
	plus: {
		type: DataTypes.STRING, allowNull: false
	},
	minus: {
		type: DataTypes.STRING, allowNull: false
	}
})


User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Feedback)
Feedback.belongsTo(User)

Category.hasMany(Product)
Product.belongsTo(Category)


Naznachenie.hasMany(Product)
Product.belongsTo(Naznachenie)

Product.hasMany(Feedback)
Feedback.belongsTo(Product)

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })

Category.belongsToMany(Brand, { through: CategoryBrand })
Brand.belongsToMany(Category, { through: CategoryBrand })

Category.belongsToMany(Type, { through: CategoryType })
Type.belongsToMany(Category, { through: CategoryType })



Product.hasMany(ProductInfo, { as: 'info' })
ProductInfo.belongsTo(Product)

export const models = {
	User,
	Product,
	Category,
	Brand,
	Rating,
	Color,
	Size,
	Type,
	Naznachenie,
	TypeBrand,
	Feedback,
	CategoryBrand,
	CategoryType,
	ProductInfo,
	Info,
	Opisanie,
}

