import bcrypt from 'bcryptjs';
export default{
    users: [{
            name: 'Kacper',
            email: 'kacpergawel1@wp.pl',
            password: bcrypt.hashSync('Gawlokacpi1', 8),
            isAdmin: true,
        },
        {
            name: 'Kajtek',
            email: 'kajtek@wp.pl',
            password: bcrypt.hashSync('Kajtek1', 8),
            isAdmin: false,
        }],
    products: [{
            name: 'Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 60,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 0,
        },
        {
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 9,
        },
        {
            name: 'Best Pants',
            category: 'Pants',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 100,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 7,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 15,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 5,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 10,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 21,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 16,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 1,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'subufery-z-cieniem-removebg-preview.png',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 2,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'kijki.jpg',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 7,
        },{
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'kijki.jpg',
            price: 89,
            brand: 'Nike',
            thumbnail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut justo feugiat, gravida.',
            countInStock: 12,
        },]
}