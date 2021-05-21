import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';

export default function Singlepost() {
	const [singlePost, setSinglePost] = useState(null);

	return <h1>Singlepost Page !</h1>;
}
