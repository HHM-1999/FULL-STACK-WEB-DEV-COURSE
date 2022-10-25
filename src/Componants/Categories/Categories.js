import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    })
    return (
        <div>
            <h2>Total Courses :{categories.length}

            </h2>
            <div className="mt-3" >
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/courses/${category.id}`}
                            className='category'>
                            {category.title_name}
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Categories;