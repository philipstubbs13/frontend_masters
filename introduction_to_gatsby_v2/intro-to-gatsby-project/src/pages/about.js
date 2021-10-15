import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <Layout
      title="About this site"
      description="More information about this site."
    >
      <h1>About This Site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
