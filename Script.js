
        document.getElementById('recommendation-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const newRecommendation = document.getElementById('new-recommendation').value;
            if (newRecommendation) {
                const card = document.createElement('div');
                card.className = 'card';
                card.textContent = newRecommendation;
                document.getElementById('recommendations-list').appendChild(card);
                alert('Thank you for your recommendation!');
                document.getElementById('new-recommendation').value = '';
            }
        })
