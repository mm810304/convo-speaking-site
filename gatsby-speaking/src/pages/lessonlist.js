import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import styles from './lesson-list.module.css';

const LessonListPage = ({ data }) => {
  const lessons = data.lessons.nodes.sort((a, b) => {
    return a.title > b.title ? 1 : -1;
  });

  return (
    <React.Fragment>
      <SEO 
        title="All Convo Speaking Lessons"
        description="A list of all the conversation lessons on Convo Speaking"
        location="https://www.convospeaking.com/lessonlist"
      />
      <Layout>
        <div className={styles.wrapper}>
          <h1 className={styles.lessonListHeader}>List of All Conversations</h1>
          <div className={styles.lessonListContainer}>
            <ol className={styles.lessonList}>
              {lessons.map((lesson) => (
                <li key={lesson.id} className={styles.listItem}>
                  <Link to={`/${lesson.category.slug.current}/${lesson.slug.current}`}>
                    {lesson.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query AllLessonsQuery {
    lessons: allSanityLessons(sort: {fields: category___category_name}) {
    nodes {
      id
      title
      lesson_number
      category {
        category_name
        slug {
          current
        }
      }
      slug {
        current
      }
    }
  }
}`;

export default LessonListPage;