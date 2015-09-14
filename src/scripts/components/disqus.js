class Disqus extends React.Component {
  constructor(props) {
    super(props)
    let disqus_shortname = 'jiketao';
    (function() {
        var dsq = document.createElement('script')
        dsq.type = 'text/javascript'
        dsq.async = true
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] ||
         document.getElementsByTagName('body')[0]).appendChild(dsq)
    })();
  }
  render() {
    return (
      <div className="disqus">
      <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
      </div>
    )
  }
}

export default Disqus
