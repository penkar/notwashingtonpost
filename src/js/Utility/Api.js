import Sample from './Sample'

export const getStories = (actions) => {
  console.log(Sample);
  actions.setStoryTags(Sample.taglines);
  actions.setStoryAction(Sample.news);
  // fetch(``)
  //   .then(res=>res.json())
  //   .then(response=> {
  //     console.log(resonse);
  //   })
}
