const BANNERMODEL = Symbol('Application#banner')
const USERMODEL = Symbol('Application#user')
const SHOPLISTMODEL = Symbol('Application#shoplist')
const SHOPINFOMODEL = Symbol('Application#shopinfo')

module.exports = {
    get bannerModel() {
        if (!this[BANNERMODEL]) {
            const mongoose = this.mongoose
            const Schema = mongoose.Schema
            const BannerSchema = new Schema({
                url: String,
                target: String
            })
            this[BANNERMODEL] = mongoose.model('banner', BannerSchema)
        }
        return this[BANNERMODEL]
    },
    get userModel() {
        if (!this[USERMODEL]) {
            const mongoose = this.mongoose
            const Schema = mongoose.Schema
            const UserSchema = new Schema({
                name: String,
                email: String,
                password: String,
                bio: String
            })
            this[USERMODEL] = mongoose.model('user', UserSchema)
        }
        return this[USERMODEL]
    },
    get shopListModel() {
        if (!this[SHOPLISTMODEL]) {
            const mongoose = this.mongoose
            const Schema = mongoose.Schema
            const ShopListSchema = new Schema({
                img: String,
                name: String,
                rating: Number,
                medal: Boolean,
                count: Number,
                support: {
                    quickShip: Boolean,
                    noReason: Boolean,
                    isGirl: Boolean
                },
            })
            this[SHOPLISTMODEL] = mongoose.model('shoplist', ShopListSchema)
        }
        return this[SHOPLISTMODEL]
    },
    get shopInfoModel() {
        if (!this[SHOPINFOMODEL]) {
            const mongoose = this.mongoose
            const Schema = mongoose.Schema
            const ShopInfoSchema = new Schema({
                info: Object,
                goods: [Object],
                rating: [Object]
            })
            this[SHOPINFOMODEL] = mongoose.model('shopinfo', ShopInfoSchema)
        }
        return this[SHOPINFOMODEL]
    }
}
