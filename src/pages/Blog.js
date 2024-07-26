import DetailedWork from '../components/DetailedWork';
import { blogDetails as details } from '../data/BlogPage';

const Blog = () => {
    return (
        <DetailedWork
            workTitle={details.workTitle}
            windowImages={details.windowImages}
            siteLink={details.siteLink}
            codeLink={details.codeLink}
            description={details.description}
            learningPoints={details.learningPoints}
            isLargeDisplay={true}
        />
    );
};

export default Blog;