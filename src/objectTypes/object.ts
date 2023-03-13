// Object declaration
const sinhvien: { name: string, grade: number, hometown: string, age: number } = {
    name: "Tài",
    grade: 5,
    age: 20,
    hometown: "Thái Bình",
}

const sinhvien2: { name: string, grade: number, hometown: string, age: number } = {
    name: "Thanh",
    grade: 5,
    age: 20,
    hometown: "Nam Định",
}

// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}}
interface IBook {
    authors: Author[],
    book_cover?: string,
    categories: { id: number, name: string, is_leaf: boolean },
    description: string,
    images: Image[]
    list_price: number,
    name: string,
    original_price: string,
    rating_average: number,
    short_description: string,
    specifications: Specifications[]
    id: number
}

interface Author {
    id: number,
    name: string,
    slug: string
}

interface Image {
    base_url: string,
    is_gallery: boolean,
    label: string,
    large_url: string,
    medium_url: string,
    position?: string,
    small_url: string,
    thumbnail_url: string
}

interface current_seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported?: string
}

interface quantity_sold {
    text: string,
    value: number
}

interface Specifications {
    name: string,
    attributes: Attributes[]
}

interface Attributes {
    code: string,
    name: string,
    value: string
}


// const book1: Book = {

// }

// const book2: Book = {
    
// }

// Phân biệt interface và type alias