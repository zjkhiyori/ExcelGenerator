class EmvData {
  static get schema() {
    return {
      name: 'EmvData',
      properties: {
        track1: 'string?',
        track2: 'string?',
      },
    }
  }
}

export default EmvData;
