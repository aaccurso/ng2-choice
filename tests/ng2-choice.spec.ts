import { ChoiceModule } from '../ng2-choice';

describe('ChoiceModule', () => {
    let choiceModule: ChoiceModule;

    beforeEach(() => {
        choiceModule = new ChoiceModule();
    });

    it('is defined', () => {
        expect(ChoiceModule).toBeDefined();

        expect(choiceModule instanceof ChoiceModule).toBeTruthy();
    });
});
