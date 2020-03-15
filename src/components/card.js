import React, {Component} from 'react';
import {Button, Card} from 'antd';
import '../App.css'

const { Meta } = Card;

class Article {

    constructor(name, photo, prix) {
        this.name = name;
        this.photo = photo;
        this.prix = prix;
    }
}

class ProductCard extends Component{

    articles = [
        new Article('IphoneX','https://www.cdiscount.com/pdt2/o/g/s/1/700x700/iphonex64gogs/rw/apple-iphone-x-gris-sideral-64-go.jpg', '250€' ),
        new Article('MacBook Pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_EMEA_LANG_FR?wid=892&hei=820&&qlt=80&.v=1573151654798', '1300€'),
        new Article('Water Bottle', 'https://5.imimg.com/data5/GV/DP/MY-3831378/500ml-plastic-water-bottle-500x500.jpg', '1€')
    ]


    render() {


        return(
            <div className={'cardContainer'}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Iphone" src="https://www.cdiscount.com/pdt2/o/g/s/1/700x700/iphonex64gogs/rw/apple-iphone-x-gris-sideral-64-go.jpg" />}
                    className={'productCard'}
                >
                    <Meta title="📱 IphoneX" description="250 €" />
                    <Button type="primary" style={{ margin: 3}}>
                        Mettre dans mon panier
                    </Button>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_EMEA_LANG_FR?wid=892&hei=820&&qlt=80&.v=1573151654798" />}
                    className={'productCard'}
                >
                    <Meta title="💻 MacBook Pro" description="1300€" />
                    <Button type="primary" style={{ margin: 3}}>
                        Mettre dans mon panier
                    </Button>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://images-na.ssl-images-amazon.com/images/I/71gVipI1%2BIL._AC_SY450_.jpg" />}
                    className={'productCard'}
                >
                    <Meta title="🍌 Banana" description="0,50€" />
                    <Button type="primary" style={{ margin: 3}}>
                        Mettre dans mon panier
                    </Button>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://www.monsieur-cuisine.com/fileadmin/_processed_/b/b/csm_23148_Rezeptfoto_01_cd6aec6c0e.jpg" />}
                    className={'productCard'}
                >
                    <Meta title="🍕 Pizza" description="10€" />
                    <Button type="primary" style={{ margin: 3}}>
                        Mettre dans mon panier
                    </Button>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://cdn.shopify.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-barcelona-lateral.jpg?v=1568100035" />}
                    className={'productCard'}
                >
                    <Meta title="👓 Lunette" description="50€" />
                    <Button type="primary" style={{ margin: 3}}>
                        Mettre dans mon panier
                    </Button>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA8PDxAVEBAQDhUVDxYWDxcXGBMYFxEWFxUWGhUaHCshGBslHhUVITEiJSkvOi4uGR82ODMuNygwLisBCgoKDg0NFQ8PFSsZFRkrLSsrKysrKy0rNystNysrKzctNy0rLTcrLTcrKysrKysrKysrKysrKysrLSsrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECAwQFB//EAEIQAAEDAgQCBgYIBAQHAAAAAAEAAgMEEQUSITFBcQYTIlFhgRQyQmKRoQcjUnKxwdHwgoOSsjNDU+EWJERzhKLx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAQEBAQEBAQAAAAAAAAAAAAABERICMSH/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFgnqWsvc6gXPgO8ngEGdFGZelRkOWjp5KrWxe0tZEP5ryA7+DMqDFMTGrqOJw7mVYLv8A3a1vzWeouJOi4eH9JYpH9VK11PNa+SRtifEHZw8RceK7TXg7KyouREVBERAREQEREBERAREQEREBERAREQEREBERARFycexZlPGXG51yta31pHn1Y2jvPy/CaLcaxqOnZmcSLnK3KMz5HHZkbfad++XHiwyWrs+t7Md7spmuu3nK7/Nd4bDx3V+F4e/P6TVWdUEWa0asp2H/AC4/zdx5WC64esW61FzGBoAGgA0A0A8uCZ1YXK0uWRjxChjqGZJBcXu0jRzDwc08CtDD6+SlkENSbtcbRS8H9zXD2Xj58O4dPOsdVEyVpY9uZrhqD+91ZR22OBAIVyimH10lG9sEzi+JxtDIf7Xdzh89+8CURyBwuDcLpLqWL0RFUEREBERAREQEREBERAREQEREBERARFQlBqYlV9W2wIDnA2J2aANXHwGnmQorhTfSZBWPByAEUjTwYd5T7z/k23eVgxar9MkEIPYqCTJ4UzDYN/mE/Bzu5dlruC5+rrUjPnTMsV0zLIylysLlaCrZH5bd5cAPP/YE+SDPHG52w23Ow+Kr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" />}
                    className={'productCard'}
                >
                    <Meta title="🔑 Clé" description="3€" />
                    <Button type="primary" style={{ margin: 3}}>
                        Mettre dans mon panier
                    </Button>
                </Card>
            </div>
        )
    }
}

export default ProductCard