import React, { Component, PureComponent } from 'react';
// style
import './article.css'

export default class Article extends PureComponent {
    constructor(props) {
        super(props)
    }

    // <КОМПОНЕНТ БУДЕТ УСТАНОВЛЕН> - НЕ ИСПОЛЬЗУЕТСЯ
    // часто используется для получения необходимых данных 
    // к примеру отправка запроса на сервер за нашей статьей
    // componentWillMount() {
    //     console.log('---', 'componentWillMount');
    // }

    // <ОТДАВАТЬ>
    // строит виртуальный DOM нашего компонента, ничего другого в нем не должно быть
    // после построения виртуального DOM, он будет помещен в реальный DOM
    render() {
        console.log('---', 'RENDER: Отрисовка DOM');

        const { article, isOpen, handleClick } = this.props
        const body = isOpen && <p>{article.text}</p>;
        const btn = isOpen ? "Close" : "Open";

        console.log('---', 'handleClick', handleClick);
        return (
            <>
                <article className="post" >
                    <div className="post-header">
                        <h1 className="post-title">
                        {article.title} 
                        </h1>
                        <button className="post-btn" onClick={() => handleClick(article.id)}>{btn}</button>
                    </div>
                    <div className="post-text">{body}</div>
                    <time className="post-time">{article.date}</time>
                </article>
            </>   
        );
    }

    // <КОМПОНЕНТ УСТАНОВЛЕН>
    // вызывается после отрисовки компонента в реальном DOM
    // можем реагировать на окончание реализации DOM
    componentDidMount() {
        console.log('---', 'componentDidMount');

    }


    // ОБНОВЛЕНИЕ

    // <КОМПОНЕНТ ПОЛУЧИТ ПРОПСЫ> - НЕ ИСПОЛЬЗУЕТСЯ
    // действия при изменении входящих пропсов
    // вызывается, если поменялся кто-то из родителей
    // componentWillReceiveProps(nextProps) {
    //     // console.log('---', 'componentWillReceiveProps');
    // }

    // <НУЖНО ЛИ ОБНОВЛЯТЬ КОМПОНЕНТ>
    // управление виртуальным DOM вручную
    // вызывается, если поменялся кто-то из родителей или сам компонент
    // Возвращает только true или false
    // true - можем менять то, что нажали
    // false - не изменяем ничего

    shouldComponentUpdate(nexProps, nextState) {
        // console.log('------', 'shouldComponentUpdate - nextState', nextState);
        // console.log('---', 'shouldComponentUpdate');
        return true;
    }

    // <КОМПОНЕНТ БУДЕТ ОБНОВЛЕН> - НЕ ИСПОЛЬЗУЕТСЯ
    // предупреждает, что сейчас будет перестроен виртулаьный DOM для данного компонента
    // уже с готовыми пропсами и стейтом
    // к примеру статья была закрыта, а стала открыта, и мы хотим загрузить текст для данной статьи.
    // Вызывается, если поменялся кто-то из родителей или сам компонент
    // componentWillUpdate(nextProps, nextState) {
    //     // console.log('---', 'componentWillUpdate');
    // }

    // <КОМПОНЕНТ ОБНОВЛЕН>
    // если требуется информация о текущем состоянии 
    // или о текущей информации в уже отрисованном компоненте
    // Например: хотим получить размеры окна.
    componentDidUpdate(prevProps, prevState) {
        console.log('---', 'componentDidUpdate');
    }

    
    // СМЕРТЬ КОМПОНЕНТА

    // <КОМПОНЕНТ БУДЕТ УДАЛЕН>
    // действия при удалении компонента из вьюпорта
    // возможность подчистить кэш или подписки или события или изменения данных
    // провести логику деструктуризацию компонента
    componentWillUnmount() {
        // console.log('---', 'componentWillUnmount');
    }


    // Нет в хуках
    // getSnapshotBeforeUpdate() {

    // }

    // getDerivedStateFromProps() {

    // }

}








