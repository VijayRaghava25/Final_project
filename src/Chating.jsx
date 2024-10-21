import { useEffect, useState } from "react";

function Chating(props) {
    let [text, setText] = useState({question: '', answer: ''});
    let [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
            setText({
                question: 'What is the campus address?',
                answer: 'The address is 123 University Road, VFSTR University.'
            });
        }, 1000);
    }, []);

    return (
        <>
            <div className="entire_Area">
                {
                    showLoading ? (
                        'loading.....'
                    ) : (
                        <div>
                            <h1>Question: {text.question}</h1>
                            <p>Answer: {text.answer}</p>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Chating;
