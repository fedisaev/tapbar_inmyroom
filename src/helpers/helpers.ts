export const scrollToTop = (): void => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

export const sharePage = (): void => {
    if (navigator.share) {
        navigator.share({url: window.location.href});
    } else {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Ссылка скопирована в буфер обмена'))
            .catch((error) => console.error('Ошибка при копировании в буфер обмена:', error));
    }
};