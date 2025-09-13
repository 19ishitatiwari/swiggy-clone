import { useState } from "react";
import ItemList from "./ItemList";
const NestedItemCategory = ({data, openSection, setOpenSection, parentIndex}) => {

    const { title, categories } = data;
    // const [nestedIsOpen, setNestedIsOpen] = useState(false);

    // const handleClick = () => {
    //     setNestedIsOpen(!nestedIsOpen);
    // }

    const handleToggle = (index) => {
        if (openSection?.level === "nested" && openSection?.parentIndex === parentIndex && openSection?.index === index) {
            setOpenSection(null);
        } else {
            setOpenSection({ level: "nested", parentIndex, index });
        }
    };

    return (
        <div className="w-1/2 m-auto p-4 text-left bg-amber-50 border-gray-100 border-b-2">
            <span className="font-bold text-lg">{title} </span>
            {categories.map((cat, index) => {
                const isOpen = openSection?.level === "nested" && openSection?.parentIndex === parentIndex && openSection?.index === index;
                return (
                    <div
                        key={cat.categoryId}
                        className={`py-2 cursor-pointer ${
                        index !== categories.length - 1 ? "border-b-2 border-gray-100 my-2" : "mb-2"
                        }`}
                        onClick={() => handleToggle(index)}
                    >
                        <div className="w-full flex justify-between">
                            <span className="font-bold text-md">
                                {cat.title} ({cat.itemCards.length})
                            </span>
                            <span className="font-bold text-lg">{isOpen ? "↑" : "↓" }</span>
                        </div>
                        {isOpen &&
                            <div className="mt-2">
                                <ItemList data={cat.itemCards} />
                            </div>
                        }
                    </div>
                );
            })}
        </div>
    )
}

export default NestedItemCategory;