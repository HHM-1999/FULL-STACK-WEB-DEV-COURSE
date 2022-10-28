import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const Categories = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('https://assignment-10-server-side-delta.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    })
    return (
        <div>
            <div className="mt-3 d-flex justify-content-between" >
                <div>
                    {
                        categories.map(category => <p key={category.id}>
                            <Link to={`/courses/${category.id}`}
                                className='category'>
                                {category.title_name}

                            </Link>
                        </p>)
                    }
                </div>

                <div>
                    {
                        categories.map(c => <Card key={c.id}
                            c={c}
                        >

                        </Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;