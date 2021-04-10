import EntityImage from "./entityImage";

export default class DomainImage extends EntityImage {
    createDomainURL (domain) {
        return `img/domains/${this.convertURISafe(domain.name)}`
    }

    render() {
        const { domain, classes } = this.props;

        return this.createEntityImage(
            this.createDomainURL(domain),
            ['DomainImage', ...classes],
            domain.name
        );
    }
}