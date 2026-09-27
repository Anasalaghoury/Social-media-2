  const themeToggleBtn = document.getElementById('theme-toggle');
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        });

        // Toggle See More Sections
        function toggleSeeMore() {
            const section = document.getElementById('see-more-section');
            const btnText = document.getElementById('see-more-text');
            if (section.classList.contains('hidden')) {
                section.classList.remove('hidden');
                btnText.innerHTML = '<i class="fa-solid fa-chevron-up"></i> عرض أقل (See Less)';
            } else {
                section.classList.add('hidden');
                btnText.innerHTML = '<i class="fa-solid fa-chevron-down"></i> عرض المزيد (See More)';
            }
        }

        // Like Toggle Interactive State
        function toggleLike(postId, button) {
            const likeCountEl = document.getElementById(`like-count-${postId}`);
            let count = parseInt(likeCountEl.innerText);
            const icon = button.querySelector('i');
            
            if (button.classList.contains('liked')) {
                button.classList.remove('liked');
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                likeCountEl.innerText = count - 1;
            } else {
                button.classList.add('liked');
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                likeCountEl.innerText = count + 1;
            }
        }

        // Focus Comment Input
        function focusComment(postId) {
            document.getElementById(`comment-input-${postId}`).focus();
        }

        // Handle Add Comment
        function handleCommentSubmit(event, postId) {
            if (event.key === 'Enter') {
                addComment(postId);
            }
        }

        function addComment(postId) {
            const input = document.getElementById(`comment-input-${postId}`);
            const text = input.value.trim();
            if (!text) return;

            const commentsList = document.getElementById(`comments-list-${postId}`);
            
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-item';
            commentDiv.innerHTML = `
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="سارة">
                <div class="comment-content">
                    <div class="comment-bubble highlight">
                        <span class="comment-author">سارة أحمد</span>
                        ${text}
                    </div>
                    <div class="comment-meta">
                        <button>إعجاب</button>
                        <button>رد</button>
                        <span>الآن</span>
                    </div>
                </div>
            `;

            commentsList.appendChild(commentDiv);
            input.value = '';
        }