import Sample from './Sample'

export const getStories = (actions) => {
  actions.setStoryTags(Sample.news);
  actions.setStoryAction(Sample.news);
  // fetch(``)
  //   .then(res=>res.json())
  //   .then(response=> {
  //     console.log(resonse);
  //   })
}
