import React from 'react';
import PageHeader from '../../components/PageHeader';
import NewHereForm from '../../components/NewHereForm'

const NewHerePage = () => {
    return (
        <div>
            <PageHeader title="First Time Here? We'd love to connect with you." />
            <NewHereForm />
        </div>
    )
}

export default NewHerePage;