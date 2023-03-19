const tips = document.querySelectorAll('.security-tip');
tips.forEach(tip => {
  tip.addEventListener('click', () => {
    alert('Remember to always use strong, unique passwords!');
  });
});
